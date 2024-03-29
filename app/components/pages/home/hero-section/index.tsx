import { Button } from '@/app/components/button'
import { TechBadge } from '@/app/components/tech-badge'
import Image from 'next/image'
import { HiArrowNarrowRight } from 'react-icons/hi'
import {
  TbBrandGithub,
  TbBrandLinkedin,
  TbBrandWhatsapp,
  TbBrandYoutube,
} from 'react-icons/tb'

const MOCK_CONTACTS = [
  {
    url: 'https://gihub.com.br',
    icon: <TbBrandGithub />,
  },
  {
    url: 'https://gihub.com.br',
    icon: <TbBrandLinkedin />,
  },
  {
    url: 'https://gihub.com.br',
    icon: <TbBrandYoutube />,
  },
  {
    url: 'https://gihub.com.br',
    icon: <TbBrandWhatsapp />,
  },
]

export const HeroSection = () => {
  return (
    <section className="w-full lg:h-[755px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col justify-end pb-10 sm:pb-32 py-32 lg:pb-[110px]">
      <div className="container flex items-start justify-between flex-col-reverse lg:flex-row">
        <div className="w-full lg:max-w-[530px]">
          <p className="font-mono text-indigo-400">Olá, meu nome é</p>
          <h2 className="text-4xl font-medium mt-2">Afonso César</h2>

          <p className="text-gray-400 my-6 text-sm sm:text-base">
            Olá, meu nome é Afonso César, sou desenvolvedor full stack
            apaixonado por tecnologia
          </p>
          <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px]">
            {Array.from({ length: 5 }).map((_, index) => (
              <TechBadge name="React Native" key={index} />
            ))}
          </div>

          <div className="flex sm:items-center sm:gap-5 flex-col mt-6 lg:mt-10 sm:flex-row">
            <div>
              <Button className="show-button w-max">
                Entre em contato
                <HiArrowNarrowRight size={18} />
              </Button>
            </div>
            <div className="text-2xl text-gray-600 flex item-center gap-3">
              {MOCK_CONTACTS.map((contact, index) => (
                <a
                  href={contact.url}
                  key={`contact-${index}`}
                  target="_blank"
                  className="hover:text-gray-100 transition-colors"
                  rel="noreferrer"
                >
                  {contact.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <Image
          width={420}
          height={404}
          src="/images/profile.jpeg"
          alt="Foto de perfil do Gabriel Borges"
          className="w-[300px] h-[300px] lg:w-[404px] lg:h-[404px] mb-6 lg:mb-0 shadow-2xl rounded-lg object-cover"
        />
      </div>
    </section>
  )
}
