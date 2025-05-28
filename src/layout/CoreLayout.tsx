function CoreLayout({ ...props }: any) {
  return (
    <div className="p-8 lg:px-32 justify-center">
      <div className="bg-gray-300 rounded-3xl p-8">{props.children}</div>
    </div>
  );
}

export default CoreLayout;
