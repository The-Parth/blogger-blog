const Card = ({ Url, content, alt, title }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-[0_35px_60px_-15px_rgba(255,255,255,0.3)] m-4">
      <img className="w-full" src={Url} alt={alt} />

      <div class="px-6 py-4  bg-[#031130]">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-[#7ea4f7] text-base">{content}</p>
      </div>
    </div>
  );
};

export default Card;