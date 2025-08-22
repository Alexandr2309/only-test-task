import { CSSProperties, FC } from "react";
import * as classes from './Circle.module.scss'

export const Circle: FC = () => {
    return (
      <div className={classes.container} style={{'--m': 8} as CSSProperties}>
        <a href='#'>
          <img src="image_mid.jpg" alt="alt text" />
        </a>
        <a style={{'--i': 1} as CSSProperties}>
          <img src="first_img_on_circle.jpg" alt="alt text" />
        </a>
      </div>
    )
}

