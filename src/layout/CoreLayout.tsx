function CoreLayout({ ...props }: any) {
  return (
    <div className="py-8 px-4 lg:py-8 lg:px-32 flex flex-col justify-center min-h-screen">
      {props.children}
    </div>
  );
}

export default CoreLayout;
