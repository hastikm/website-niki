import star from '../../assets/icons/star.svg'

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="flex flex-col items-center text-center p-6">
      {/* عکس مشتری */}
      <img
        src={imgURL}
        alt="customer image"
        className="rounded-full mb-4"
        width={100}
        height={100}
      />

      {/* متن فیEDBACK */}
      <p className="text-gray-600 mb-4 text-[20px]">{feedback}</p>

      {/* امتیاز */}
      <div className="flex items-center gap-2 mb-4">
        <img src={star} alt="star icon" className="w-5 h-5" />
        <p className="font-bold text-gray-500">{rating}</p>
      </div>

      {/* اسم مشتری */}
      <h1 className="text-[25px] font-bold">{customerName}</h1>
    </div>
  )
}

export default ReviewCard;
