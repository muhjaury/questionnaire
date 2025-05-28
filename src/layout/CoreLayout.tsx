function CoreLayout({ ...props }: any) {
  return (
    <div className="py-8 px-4 lg:py-8 lg:px-32 flex justify-center">
      <div className="bg-gray-300 rounded-3xl py-8 px-4 lg:p-8 w-full max-w-300">
        {props.children}
      </div>
    </div>
  );
}

export default CoreLayout;
