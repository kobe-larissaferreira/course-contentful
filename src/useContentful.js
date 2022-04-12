import { createClient } from "contentful";
//import { REACT_APP_KEY_SPACE, REACT_APP_TOKEN } from "@env";

const useContentful = () => {
  const client = createClient({
    space: process.env.REACT_APP_KEY_SPACE,
    accessToken: process.env.REACT_APP_KEY_TOKEN,
    host: "preview.contentful.com",
  });

  const getAuthors = async () => {
    try {
      const entries = await client.getEntries({
        content_type: "course",
        select: "fields",
        // order: "fields.name",
      });

      const sanitizedEntries = entries.items.map((item) => {
        const avatar = item.fields.avatar.fields;

        return {
          ...item.fields,
          avatar,
        };
      });

      return sanitizedEntries;
    } catch (err) {
      console.log(`Error fetching authors: ${err}`);
    }
  };
  return { getAuthors };
};

export default useContentful;
