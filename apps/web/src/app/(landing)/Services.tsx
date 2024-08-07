import Container from '@/components/Container';

import useServices from '@/hooks/useServices';

import Service from './Service';

export default function Services() {
  const { services } = useServices();

  return (
    <Container
      background="/banners/servicos.webp"
      description="Cabelo afiado, barba de lenhador e mãos de motoqueiro, tudo ao som de rock pesado!"
      tag="Serviços"
      title="Do Clássico ao Rock"
    >
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => (
          <Service
            key={service.id}
            service={service}
          />
        ))}
      </div>
    </Container>
  );
}
