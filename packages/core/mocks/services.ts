import type { Service } from '../src/service';

const services: Service[] = [
  {
    description:
      'Venha receber um corte de Viking, com lâmina na pele e estilo de guerreiro. Saia pronto para enfrentar qualquer batalha com um visual que impõe respeito.',
    id: 1,
    logoUrl: '/servicos/corte-de-cabelo.jpg',
    name: 'Corte Viking',
    price: 55,
    totalSlots: 3,
  },
  {
    description:
      'Venha dar um trato na sua barba de lenhador, com aparo preciso e estilo de macho raiz. Saia com uma barba que impõe respeito e faz tremer até as árvores.',
    id: 2,
    logoUrl: '/servicos/corte-de-barba.jpg',
    name: 'Barba de Lenhador',
    price: 45,
    totalSlots: 2,
  },
  {
    description:
      'Venha transformar suas patas de urso em garras de lobo. Nosso serviço de Manicure & Pedicure para homens é tão bruto quanto você, mas com um toque de classe.',
    id: 3,
    logoUrl: '/servicos/manicure-pedicure.jpg',
    name: 'Garras Brutais',
    price: 40,
    totalSlots: 2,
  },
  {
    description:
      'Nosso combo "Alpha" inclui um corte de cabelo de Viking, uma barba de lenhador e manicure & pedicure de gladiador. Saia pronto para enfrentar qualquer batalha com estilo e unhas afiadas.',
    id: 4,
    logoUrl: '/servicos/combo.jpg',
    name: 'Combo Alpha',
    price: 95,
    totalSlots: 2,
  },
  {
    description:
      'Transforme seu pequeno aventureiro em um mini caçador, com um corte cheio de atitude e estilo. Cabelo afiado como uma guitarra e maneiro como uma Harley.',
    id: 5,
    logoUrl: '/servicos/corte-infantil.jpg',
    name: 'Pequeno Caçador',
    price: 60,
    totalSlots: 2,
  },
  {
    description:
      'Prepare-se para o grande dia com um tratamento digno de um verdadeiro guerreiro da estrada. Corte de cabelo afiado, barba de lenhador e manicure de motoqueiro, tudo enquanto você relaxa ao som de rock pesado.',
    id: 6,
    logoUrl: '/servicos/dia-de-noivo.jpg',
    name: 'Noivo Raiz',
    price: 189,
    totalSlots: 2,
  },
];

export default services;
