import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Placeholder() {
  const { pathname } = useLocation();
  const { t } = useTranslation();

  return (
    <div style={{ paddingTop: '120px', minHeight: '60vh', textAlign: 'center' }}>
      <h2>{pathname}</h2>
      <p style={{ marginTop: '1rem', color: '#666' }}>{t('placeholder.message')}</p>
    </div>
  );
}
