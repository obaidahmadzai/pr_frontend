function Asterisk({ children }: { children: any }) {
  return (
    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
      {children}
    </span>
  );
}

export default Asterisk;
