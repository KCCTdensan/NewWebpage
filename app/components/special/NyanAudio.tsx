import nyan from "@/assets/audio/nyan.ogg";
import { konamiAtom } from "@/atoms/special";
import { css } from "@styles/css";
import { useAtomValue } from "jotai";

export const NyanAudio = () => {
  const konami = useAtomValue(konamiAtom);

  return (
    <>
      {konami &&
        <audio className={css({
          w: "full",
        })} autoPlay controls src={nyan}/>
      }
    </>
  );
}