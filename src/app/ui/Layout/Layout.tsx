import { FC, PropsWithChildren } from "react";
import * as classes from "./Layout.module.scss";
import clsx from "clsx";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={'layout'}>
      <div className={classes.container}>
        <div className={classes.content}>{children}</div>
        <div className={clsx(classes.line, classes.lineRight)} />
        <div className={clsx(classes.line, classes.lineLeft)} />
        <div className={clsx(classes.line, classes.lineCenter)} />
        <div className={clsx(classes.line, classes.lineHorizontal)} />
      </div>
    </div>
  ); 
};

