const PaymentHistory = () => {
  return (
    <div>
      <div>
        <h2 className="text-4xl text-center mt-6  font-bold">
          {" "}
          Payment History
        </h2>
        <hr className="w-96 mx-auto mt-2 mb-4" />
      </div>
      {/* 
      <input
        type="file"
        {...register("image_url", { required: true })}
        onChange={(e) => console.log(URL.createObjectURL(e.target.files[0]))}
        className="file-input file-input-bordered w-full"
      />
      {errors.image_url && (
        <span className="text-xs text-red-600">This field is required</span>
      )}*/}
    </div>
  );
};

export default PaymentHistory;
