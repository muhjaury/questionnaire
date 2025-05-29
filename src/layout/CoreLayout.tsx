function CoreLayout({ ...props }: any) {
  return (
    <div className="py-8 px-4 lg:py-8 lg:px-32 flex flex-col justify-center">
      {props.children}
    </div>
  );
}

export default CoreLayout;
