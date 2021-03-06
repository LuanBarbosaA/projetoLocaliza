import React, { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { IPropsCard } from './types/index';
import { CardContainer, CardDescription } from './styles';

const CardCategory: FC<IPropsCard> = ({ category }) => {
  return (
    <Link href={`/category/${category.id}`} passHref>
      <CardContainer>
        <Image src={category.url ? category.url : '/assets/imageNotFound.jpg'} width={248} height={136} />
        <CardDescription>
          <div>
            <strong>{category.nome}</strong>
            <p>{category.descricao}</p>
          </div>
        </CardDescription>
      </CardContainer>
    </Link>
  );
};

export default CardCategory;
