const page = ({ searchParams }) => {
  return (
    <div>
      testing route
      <div>
        <p>{searchParams.id}</p>
      </div>
    </div>
  );
};

export default page;
