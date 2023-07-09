function Error({
  touched,
  error,
  field,
}: {
  touched: any;
  error: any;
  field: any;
}) {
  return touched[field] && error[field] ? (
    <div className="text-red-600 mt-2">{error[field]}</div>
  ) : null;
}

export default Error;
