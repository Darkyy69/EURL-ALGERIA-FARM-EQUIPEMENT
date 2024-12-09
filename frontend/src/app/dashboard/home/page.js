"use client";

import { useState, useEffect } from "react";
import axios from 'axios';
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GeneralContentForm } from "@/components/GeneralContentForm";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Toaster } from "@/components/ui/toaster";
import { toast } from "@/components/ui/use-toast";

export default function GeneralContentPage() {
  const [generalContent, setGeneralContent] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingContent, setEditingContent] = useState(null);
  const [activeTab, setActiveTab] = useState("header");

  useEffect(() => {
    fetchGeneralContent();
  }, []);

  const fetchGeneralContent = async () => {
    try {
      const response = await axios.get("https://abovines.com/api/general-content.php");
      setGeneralContent(response.data);
      setIsLoading(false);
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
      toast({
        title: "Error",
        description: "Failed to fetch content. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleCreateContent = (sectionName) => {
    setEditingContent({
      section_name: sectionName,
      content: getDefaultContentForSection(sectionName)
    });
    setIsFormOpen(true);
    setActiveTab(sectionName);
  };

  const handleEditContent = (content) => {
    setEditingContent(content);
    setIsFormOpen(true);
    setActiveTab(content.section_name);
  };

  const handleDeleteContent = async (id) => {
    if (window.confirm("Are you sure you want to delete this content?")) {
      try {
        await axios.delete(`https://abovines.com/api/general-content.php?id=${id}`);
        fetchGeneralContent();
        toast({
          title: "Success",
          description: "Content deleted successfully.",
        });
      } catch (err) {
        setError(err.message);
        toast({
          title: "Error",
          description: "Failed to delete content. Please try again.",
          variant: "destructive",
        });
      }
    }
  };

  const getDefaultContentForSection = (sectionName) => {
    switch (sectionName) {
      case "header":
        return JSON.stringify({ landline: "", email: "", languages: [] });
      case "hero":
        return JSON.stringify({ title: "", subtitle: "", image: "", button_text: "", button_link: "" });
      case "completed_projects":
      case "featured_products":
        return JSON.stringify([]);
      case "company":
        return JSON.stringify([{ id: "1", title: "", description: "" }]);
      case "footer":
        return JSON.stringify([
          { heading: "LA VOIX DE NOS CLIENTS", content: { testimonial: "", author: "", position: "" } },
          { heading: "INSTALLÉS EN", content: [], social_links: [] },
          { heading: "CONTACTEZ-NOUS", form_fields: [], submit_button: { text: "" } }
        ]);
      default:
        return "{}";
    }
  };

  const renderContentValue = (content, sectionName) => {
    if (!content) return "No content";
    try {
      const parsedContent = JSON.parse(content);
      switch (sectionName) {
        case "header":
          return (
            <div>
              <p>Landline: {parsedContent.landline}</p>
              <p>Email: {parsedContent.email}</p>
              <p>Languages: {parsedContent.languages.join(", ")}</p>
            </div>
          );
        case "hero":
          return (
            <div>
              <p>Title: {parsedContent.title}</p>
              <p>Subtitle: {parsedContent.subtitle}</p>
              <p>Image: {parsedContent.image}</p>
              <p>Button Text: {parsedContent.button_text}</p>
              <p>Button Link: {parsedContent.button_link}</p>
            </div>
          );
        case "completed_projects":
        case "featured_products":
          return (
            <ul>
              {parsedContent.map((item, index) => (
                <li key={index}>{item.title}</li>
              ))}
            </ul>
          );
        case "company":
          return (
            <ul>
              {parsedContent.map((item, index) => (
                <li key={index}>{item.title}: {item.description}</li>
              ))}
            </ul>
          );
        case "footer":
          return (
            <div>
              {parsedContent.map((section, index) => (
                <div key={index}>
                  <h4>{section.heading}</h4>
                  {section.content && typeof section.content === 'object' && (
                    <ul>
                      {Object.entries(section.content).map(([key, value]) => (
                        <li key={key}>{key}: {value}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          );
        default:
          return JSON.stringify(parsedContent, null, 2);
      }
    } catch (err) {
      console.error("Error rendering content:", err);
      return String(content) || "Invalid content";
    }
  };

  const renderContentTable = (sectionName) => {
    const sectionContent = generalContent.filter(
      (item) => item.section_name === sectionName
    );

    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Content</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sectionContent.map((content) => (
            <TableRow key={content.id}>
              <TableCell>{content.id}</TableCell>
              <TableCell className="max-w-xl overflow-auto">
                {renderContentValue(content.content, sectionName)}
              </TableCell>
              <TableCell>
                <Button
                  variant="outline"
                  className="mr-2"
                  onClick={() => handleEditContent(content)}
                >
                  Edit
                </Button>
                <Button
                  variant="destructive"
                  onClick={() => handleDeleteContent(content.id)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const sections = ["header", "hero", "completed_projects", "featured_products", "company", "footer"];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-8">General Content Management</h1>
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="mb-4">
          {sections.map((section) => (
            <TabsTrigger key={section} value={section}>
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </TabsTrigger>
          ))}
        </TabsList>
        {sections.map((section) => (
          <TabsContent key={section} value={section}>
            <Button onClick={() => handleCreateContent(section)} className="mb-4">
              Create New {section.charAt(0).toUpperCase() + section.slice(1)} Content
            </Button>
            {renderContentTable(section)}
          </TabsContent>
        ))}
      </Tabs>
      <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>
              {editingContent ? "Edit" : "Create"} {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Content
            </DialogTitle>
          </DialogHeader>
          <GeneralContentForm
            content={editingContent || { section_name: activeTab, content: getDefaultContentForSection(activeTab) }}
            sectionName={activeTab}
            onClose={() => setIsFormOpen(false)}
            onSubmit={() => {
              setIsFormOpen(false);
              fetchGeneralContent();
            }}
          />
        </DialogContent>
      </Dialog>
      <Toaster />
    </div>
  );
}

