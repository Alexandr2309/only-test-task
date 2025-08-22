import '@/shared/styles/global.scss'
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { Layout } from "./ui";
import { Circle } from '@/shared/ui';

gsap.registerPlugin(useGSAP);

export const App = () => {
  return (
    <div className={'app'}>
      <Layout>
        <Circle />
      </Layout>
    </div>
  );
};
