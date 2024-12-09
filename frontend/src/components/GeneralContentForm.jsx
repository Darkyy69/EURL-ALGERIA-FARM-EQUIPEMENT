import { useState, useEffect } from "react";
import axios from 'axios';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { PlusCircle, Trash2 } from 'lucide-react';
import { toast } from "@/components/ui/use-toast";

export function GeneralContentForm({ content, sectionName, onClose, onSubmit }) {
  const [formData, setFormData] = useState({
    section_name: sectionName,
    content: "{}",
  });

  useEffect(() => {
    if (content) {
      setFormData({
        section_name: content.section_name || sectionName,
        content: content.content || "{}",
      });
    }
  }, [content, sectionName]);

  const handleChange = (field, value) => {
    setFormData((prevData) => {
      const updatedContent = JSON.parse(prevData.content);
      updatedContent[field] = value;
      return { ...prevData, content: JSON.stringify(updatedContent) };
    });
  };

  const handleArrayChange = (index, field, value) => {
    setFormData((prevData) => {
      const updatedContent = JSON.parse(prevData.content);
      updatedContent[index][field] = value;
      return { ...prevData, content: JSON.stringify(updatedContent) };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = "https://abovines.com/api/general-content.php";
    const method = content ? "put" : "post";

    try {
      await axios({
        method,
        url,
        data: formData,
      });
      onSubmit();
      toast({
        title: "Success",
        description: "Content has been saved successfully.",
      });
    } catch (error) {
      console.error("Error saving content:", error);
      toast({
        title: "Error",
        description: "Failed to save content. Please try again.",
        variant: "destructive",
      });
    }
  };

  const renderForm = () => {
    const parsedContent = JSON.parse(formData.content);

    switch (sectionName) {
      case "header":
        return (
          <>
            <div>
              <Label htmlFor="landline">Landline</Label>
              <Input
                id="landline"
                value={parsedContent.landline || ""}
                onChange={(e) => handleChange("landline", e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                value={parsedContent.email || ""}
                onChange={(e) => handleChange("email", e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="languages">Languages (comma-separated)</Label>
              <Input
                id="languages"
                value={(parsedContent.languages || []).join(", ")}
                onChange={(e) => handleChange("languages", e.target.value.split(", "))}
              />
            </div>
          </>
        );

      case "hero":
        return (
          <>
            <div>
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                value={parsedContent.title || ""}
                onChange={(e) => handleChange("title", e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="subtitle">Subtitle</Label>
              <Textarea
                id="subtitle"
                value={parsedContent.subtitle || ""}
                onChange={(e) => handleChange("subtitle", e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="image">Image URL</Label>
              <Input
                id="image"
                value={parsedContent.image || ""}
                onChange={(e) => handleChange("image", e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="button_text">Button Text</Label>
              <Input
                id="button_text"
                value={parsedContent.button_text || ""}
                onChange={(e) => handleChange("button_text", e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="button_link">Button Link</Label>
              <Input
                id="button_link"
                value={parsedContent.button_link || ""}
                onChange={(e) => handleChange("button_link", e.target.value)}
              />
            </div>
          </>
        );

      case "completed_projects":
      case "featured_products":
        return (
          <div>
            {parsedContent.map((item, index) => (
              <Card key={index} className="mb-4">
                <CardContent className="pt-6">
                  <div>
                    <Label htmlFor={`title_${index}`}>Title</Label>
                    <Input
                      id={`title_${index}`}
                      value={item.title || ""}
                      onChange={(e) => handleArrayChange(index, "title", e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor={`description_${index}`}>Description</Label>
                    <Textarea
                      id={`description_${index}`}
                      value={item.description || ""}
                      onChange={(e) => handleArrayChange(index, "description", e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor={`image_${index}`}>Image URL</Label>
                    <Input
                      id={`image_${index}`}
                      value={item.image || ""}
                      onChange={(e) => handleArrayChange(index, "image", e.target.value)}
                    />
                  </div>
                  <Button
                    type="button"
                    variant="destructive"
                    onClick={() => {
                      const updatedContent = [...parsedContent];
                      updatedContent.splice(index, 1);
                      setFormData((prevData) => ({
                        ...prevData,
                        content: JSON.stringify(updatedContent),
                      }));
                    }}
                  >
                    Remove Item
                  </Button>
                </CardContent>
              </Card>
            ))}
            <Button
              type="button"
              onClick={() => {
                const updatedContent = [...parsedContent, { title: "", description: "", image: "" }];
                setFormData((prevData) => ({
                  ...prevData,
                  content: JSON.stringify(updatedContent),
                }));
              }}
            >
              Add Item
            </Button>
          </div>
        );

      case "company":
        return (
          <div>
            {parsedContent.map((item, index) => (
              <Card key={index} className="mb-4">
                <CardContent className="pt-6">
                  <div>
                    <Label htmlFor={`title_${index}`}>Title</Label>
                    <Input
                      id={`title_${index}`}
                      value={item.title || ""}
                      onChange={(e) => handleArrayChange(index, "title", e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor={`description_${index}`}>Description</Label>
                    <Textarea
                      id={`description_${index}`}
                      value={item.description || ""}
                      onChange={(e) => handleArrayChange(index, "description", e.target.value)}
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        );

      case "footer":
        return (
          <div>
            {parsedContent.map((section, index) => (
              <Card key={index} className="mb-4">
                <CardContent className="pt-6">
                  <div>
                    <Label htmlFor={`heading_${index}`}>Heading</Label>
                    <Input
                      id={`heading_${index}`}
                      value={section.heading || ""}
                      onChange={(e) => handleArrayChange(index, "heading", e.target.value)}
                    />
                  </div>
                  {section.content && typeof section.content === 'object' && (
                    <div>
                      <Label>Content</Label>
                      {Object.entries(section.content).map(([key, value]) => (
                        <div key={key}>
                          <Label htmlFor={`content_${index}_${key}`}>{key}</Label>
                          <Input
                            id={`content_${index}_${key}`}
                            value={value || ""}
                            onChange={(e) => {
                              const updatedContent = { ...parsedContent[index].content, [key]: e.target.value };
                              handleArrayChange(index, "content", updatedContent);
                            }}
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        );

      default:
        return (
          <div>
            <Label htmlFor="content">Content (JSON format)</Label>
            <Textarea
              id="content"
              value={formData.content}
              onChange={(e) => setFormData({ ...formData, content: e.target.value })}
              rows={10}
            />
          </div>
        );
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {renderForm()}
      <div className="flex justify-end space-x-2">
        <Button type="button" variant="outline" onClick={onClose}>
          Cancel
        </Button>
        <Button type="submit">Save</Button>
      </div>
    </form>
  );
}

