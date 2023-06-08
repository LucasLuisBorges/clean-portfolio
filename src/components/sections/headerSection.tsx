import { AiFillGithub, AiFillLinkedin, AiFillFileText } from 'react-icons/ai';

export function HeaderSection() {
  return (
    <section className="flex justify-center items-center h-screen bg-gradient-to-r from-[#322D37] to-[#413A4C]">
      <div>
        <h1 className="uppercase font-bold text-white/60 text-2xl">
          Oi 👋 eu sou Lucas
        </h1>
        <div>
          <div className="flex items-center gap-4">
            <h4 className="uppercase font-bold text-white text-[12rem] leading-[0.8]">
              React
            </h4>
            <a href="https://github.com/LucasLuisBorges" target="_blank">
              <AiFillGithub
                className="cursor-pointer hover:-translate-y-3 duration-500 transition-all"
                size={42}
                color="#FEF3BB"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/lucasluisborges/"
              target="_blank"
            >
              <AiFillLinkedin
                className="cursor-pointer pointer hover:-translate-y-3 duration-500 transition-all"
                size={42}
                color="#FEF3BB"
              />
            </a>
            <a
              href="https://drive.google.com/uc?id=1Hlla7SsY4rM9E64Xuquc4WKNCg1fRGQI&export=download"
              target="_blank"
            >
              <AiFillFileText
                className="cursor-pointer pointer hover:-translate-y-3 duration-500 transition-all"
                size={42}
                color="#FEF3BB"
              />
            </a>
          </div>
          <h4 className="uppercase font-bold text-white text-[12rem] leading-[0.8]">
            developer
          </h4>
        </div>
        <div className="flex w-full justify-end mt-6">
          <div className="flex flex-col w-2/3">
            <span className="uppercase text-white/60 text-xl text-end">
              Tenho 22 anos sou desenvolvedor frontend com 2 anos de
            </span>
            <span className="uppercase text-white/60 text-xl text-start">
              experiência trabalhando na área.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
