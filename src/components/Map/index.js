import dynamic from "next/dynamic";

const Map = dynamic(() => import('./Interactive'), {
    ssr: false
});

export default Map