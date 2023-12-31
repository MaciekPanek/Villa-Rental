function LoginFormRow({ className, children, error }) {
  return (
    <div
      className={`${className} border-b-neutral-200 border-b-2 py-4 flex items-center gap-20 dark:border-neutral-500 `}>
      {children}
      {/* <span className='text-red-400 italic '>{error}</span> */}
    </div>
  );
}

export default LoginFormRow;
