import Star from "./Star";
import StarsType from "../types/StarsType";

function Stars({count}: StarsType) {
  let starsArray: number[] = [];
  for (let i = 0; i < count ; i++) {
    starsArray.push(i);
  }

  return(
    <ul className="card-body-stars u-clearfix">
      {starsArray.map((star) => 
        <Star key={star}/>
      )}
    </ul>
  )
}

export default Stars;