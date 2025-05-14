import React from 'react';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();
  return <h2>{t('contact_text')}</h2>;
};

export default Contact;
