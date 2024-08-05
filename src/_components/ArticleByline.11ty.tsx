import { format } from "date-fns";

export const ArticleImage = (tags:string[], published:string, updated?:string):JSX.Element => {

  const formatDate = (date:string):string => {
    if (typeof date !== "undefined") {
      return format(new Date(date), "MMMM Lo, yyyy");
    }
    return "";
  };

  return (
    <div class="byline">
      <span class="tags">
      { Array.isArray(tags) &&
        tags.filter(tag => tag !== "posts")      
            .map((tag, index, tags) => (
          <span>
            #{ tag }{index + 1 !== tags.length && ", "}
          </span>
        ))
      }
      </span>
      <ul>
        <li>
          <strong>Published:</strong> { formatDate(published) }
        </li>
        /*
        { updated && 
        <li>
          <strong>Updated:</strong> { formatDate(updated) }
        </li>
        }
        */
      </ul>
    </div>
  );
};

export const render = ArticleImage;
