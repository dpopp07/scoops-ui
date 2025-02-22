import { ReactNode, useState } from 'react';
import { formatUnit } from '../utils';
import IngredientPreparation from './IngredientPreparation';
import Modal from './Modal';
import classes from './RecipeIngredient.module.css';

// TODO: these are duplicated everywhere and it's atrocious.
interface IngredientPrep {
  description: string;
  ingredients: {
    // TODO: Make this an interface
    name: string;
    quantity: number;
    unit?: string;
  }[];
  instructions: string[];
}

interface RecipeIngredient {
  name: string;
  quantity: number;
  unit?: string;
  preparation?: IngredientPrep;
}

interface Props {
  ingredient: RecipeIngredient;
}

export default function RecipeIngredient({ ingredient }: Props) {
  const { name, quantity, preparation, unit } = ingredient;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {quantity}
      {formatUnit(unit)} {getNameElement(name, preparation, openModal)}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <IngredientPreparation name={name} prep={preparation!} />
      </Modal>
    </>
  );
}

function getNameElement(
  name: string,
  preparation: IngredientPrep | undefined,
  openModal: () => void,
): ReactNode {
  if (preparation) {
    return (
      <span className={classes.hasPrep} onClick={openModal}>
        {name}
      </span>
    );
  }

  return name;
}
