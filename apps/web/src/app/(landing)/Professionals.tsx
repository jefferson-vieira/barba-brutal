import Container from '@/components/Container';

import useProfessionals from '@/hooks/useProfessionals';

import Professional from './Professional';

export default function Professionals() {
  const { professionals } = useProfessionals();

  return (
    <Container
      background="/banners/profissionais.webp"
      description="Só os mais brabos estão aqui! Temos o orgulho de ter o time mais qualificado do Brasil!"
      tag="Time"
      title="Nossos Brutos"
    >
      <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {professionals.map((professional) => (
          <Professional
            key={professional.id}
            professional={professional}
          />
        ))}
      </div>
    </Container>
  );
}
