export const ArticleImage = (slug:string, alt:string):JSX.Element => {
  return (
    <picture>
      <source type="image/avif" srcset={`${slug}_800w.avif`} />
      <source type="image/webp" srcset={`${slug}_800w.webp`} />
      <img src={`${slug}_800w.jpg`} width="800" height="450" alt={alt} />
    </picture>
  );
};

export const render = ArticleImage;
