function Card({ ...props }: any) {
  return (
    <div className="bg-gray-300 rounded-3xl py-8 px-4 md:p-8 w-full max-w-300 mb-4">
      {props.children}
    </div>
  );
}

export default Card;
