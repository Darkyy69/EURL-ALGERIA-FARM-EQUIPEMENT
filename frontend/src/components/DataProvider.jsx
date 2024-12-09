'use client'

import { useState, useEffect, createContext, useContext } from "react";
import axios from "axios";

const DataContext = createContext({});

export default function DataProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [headerContent, setHeaderContent] = useState([]);
  const [footerContent, setFooterContent] = useState([]);

  useEffect(() => {
    const fetchGeneralContent = async () => {
      try {
        const response = await axios.get(
          "https://abovines.com/api/general-content.php"
        );
        response.data.forEach((item) => {
          const content = JSON.parse(item.content);
          if (item.section_name === "header") {
            setHeaderContent(content);
          } else if (item.section_name === "footer") {
            setFooterContent(content);
          }
        });
      } catch (error) {
        console.error(error);
      }
    };

    fetchGeneralContent();
  }, []);

  return (
    <DataContext.Provider value={{headerContent, footerContent}}>
      {children}
    </DataContext.Provider>
  );
}

export const useDataContext = () => {
    const context = useContext(DataContext);
    if (!context) {
      throw new Error("useDataContext must be used within an AppProvider");
    }
    return context;
  };