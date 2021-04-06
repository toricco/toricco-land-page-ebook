import { FormEvent } from 'react';

export const cpfMask = (
  event: FormEvent<HTMLInputElement>,
): FormEvent<HTMLInputElement> => {
  event.currentTarget.maxLength = 14;

  let { value } = event.currentTarget;

  value = value.replace(/\D/g, '');

  value = value.replace(/\D/g, '');
  value = value.replace(/^(\d{3})(\d)/, '$1.$2');
  value = value.replace(/(\d{3})\.(\d{3})(\d)/, '$1.$2.$3');
  value = value.replace(/(\d{3})\.(\d{3})\.(\d{3})(\d)/, '$1.$2.$3-$4');

  event.currentTarget.value = value;

  return event;
};

export const cardMask = (
  event: FormEvent<HTMLInputElement>,
): FormEvent<HTMLInputElement> => {
  event.currentTarget.maxLength = 19;

  let { value } = event.currentTarget;

  value = value.replace(/\D/g, '');
  value = value.replace(/^(\d{4})(\d)/, '$1 $2');
  value = value.replace(/(\d{4})\s(\d{4})(\d)/, '$1 $2 $3');
  value = value.replace(/(\d{4})\s(\d{4})\s(\d{4})(\d)/, '$1 $2 $3 $4');

  event.currentTarget.value = value;

  return event;
};

export const cvvMask = (
  event: FormEvent<HTMLInputElement>,
): FormEvent<HTMLInputElement> => {
  event.currentTarget.maxLength = 4;

  let { value } = event.currentTarget;

  value = value.replace(/\D/g, '');

  event.currentTarget.value = value;

  return event;
};

export const monthMask = (
  event: FormEvent<HTMLInputElement>,
): FormEvent<HTMLInputElement> => {
  event.currentTarget.maxLength = 2;

  let { value } = event.currentTarget;

  value = value.replace(/\D/g, '');

  event.currentTarget.value = value;

  return event;
};

export const yearMask = (
  event: FormEvent<HTMLInputElement>,
): FormEvent<HTMLInputElement> => {
  event.currentTarget.maxLength = 4;

  let { value } = event.currentTarget;

  value = value.replace(/\D/g, '');

  event.currentTarget.value = value;

  return event;
};
