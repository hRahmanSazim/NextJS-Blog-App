const page = ({ params }: { params: { id: number } }) => {
  return (
    <div>
      <div className=" flex bg-red-100 h-[449px] items-center justify-center">
        <p className="text-3xl">Blog Post: {params.id}</p>
      </div>
      <div className="flex flex-col bg-blue-gray-500 h-screen w-[959px] m-auto">
        <div className=" flex-row h-20 bg-white"></div>
        <div className="flex-row h-14 bg-green-100">
          <p className="text-2xl">Lorem IpSum Donor Amor</p>
        </div>
        <div className="flex-row h-14 bg-yellow-100">Author</div>
        <div className="flex-row h-[652px] bg-purple-200 p-3">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of
          Letraset sheets containing Lorem Ipsum passages, and more recently
          with desktop publishing software like Aldus PageMaker including
          versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the
          printing and typesetting industry. Lorem Ipsum has been the standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum.
        </div>
        <div className=" flex-row h-[600px] bg-white">
          <div className="flex mb-4">
            <div className="w-1/2 bg-gray-400 h-[149px] mt-24">Comments</div>
            <div className="w-1/2 bg-gray-500 h-[393px] mt-24">
              {" "}
              Recent Comments
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
