import { Link } from 'react-router-dom';

// 섹션에 link: { to, label, labelEn } 이 있으면 본문 아래에 이동 링크를 붙인다
// (예: 앰플 사용법 → 크림 페이지 상호 연결)
function StoryLink({ link, pick }) {
  if (!link) return null;
  return (
    <Link className="sps-link" to={link.to}>
      {pick(link, 'label')}
    </Link>
  );
}

function Figure({ src, alt }) {
  if (!src) return null;
  return (
    <figure className="sps-figure">
      <img src={src} alt={alt || ''} loading="lazy" />
    </figure>
  );
}

function FlowSteps({ steps, pick }) {
  return (
    <div className="sps-arch">
      {steps.map((s, i) => (
        <div key={s.name} className="sps-arch-item">
          <div className="sps-arch-card">
            {s.step && <em className="sps-arch-step">{s.step}</em>}
            <strong>{s.name}</strong>
            {s.volume && <span className="sps-arch-volume">{s.volume}</span>}
            {pick(s, 'desc') && <span>{pick(s, 'desc')}</span>}
          </div>
          {i < steps.length - 1 && (
            <span className="sps-arch-arrow" aria-hidden="true">↓</span>
          )}
        </div>
      ))}
    </div>
  );
}

function Section({ s, pick }) {
  if (s.type === 'hero') {
    return (
      <section className="sps-hero">
        {s.kicker && <span className="sps-kicker">{s.kicker}</span>}
        {pick(s, 'eyebrow') && <span className="sps-eyebrow">{pick(s, 'eyebrow')}</span>}
        {pick(s, 'title') && <h2 className="sps-title">{pick(s, 'title')}</h2>}
        {pick(s, 'subtitle') && <p className="sps-subtitle">{pick(s, 'subtitle')}</p>}
        {s.tags && <p className="sps-tags">{s.tags}</p>}
        {s.badge && <span className="sps-badge-line">{s.badge}</span>}
        {s.volume && <span className="sps-volume">{s.volume}</span>}
        {(pick(s, 'paras') || []).map((p) => (
          <p key={p} className="sps-para">{p}</p>
        ))}
        <Figure src={s.image} alt={s.eyebrow || pick(s, 'title')} />
      </section>
    );
  }

  if (s.type === 'band') {
    return (
      <section className="sps-band">
        {pick(s, 'eyebrow') && <span className="sps-eyebrow">{pick(s, 'eyebrow')}</span>}
        {pick(s, 'subtitle') && <p className="sps-subtitle">{pick(s, 'subtitle')}</p>}
        {pick(s, 'title') && <h2 className="sps-title">{pick(s, 'title')}</h2>}
        {(pick(s, 'paras') || []).map((p) => (
          <p key={p} className="sps-para">{p}</p>
        ))}
        {s.flowLine && <p className="sps-routine-flow">{s.flowLine}</p>}
        {pick(s, 'lead') && <p className="sps-lead">{pick(s, 'lead')}</p>}
        {pick(s, 'note') && <p className="sps-note">{pick(s, 'note')}</p>}
        {pick(s, 'fineprint') && <p className="sps-fineprint">{pick(s, 'fineprint')}</p>}
        <StoryLink link={s.link} pick={pick} />
        <Figure src={s.image} alt={s.eyebrow || pick(s, 'title')} />
      </section>
    );
  }

  if (s.type === 'cards') {
    return (
      <section className="sps-cards">
        {(s.eyebrow || pick(s, 'title')) && (
          <div className="sps-cards-head">
            {pick(s, 'eyebrow') && <span className="sps-eyebrow">{pick(s, 'eyebrow')}</span>}
            {pick(s, 'title') && <h2 className="sps-title">{pick(s, 'title')}</h2>}
          </div>
        )}
        <div className="sps-ingredients">
          {s.items.map((ing) => (
            <article key={pick(ing, 'name')} className="sps-ingredient">
              {ing.step && <span className="sps-step">{ing.step}</span>}
              <h3 className="sps-ing-name">{pick(ing, 'name')}</h3>
              {pick(ing, 'meta') && <p className="sps-ing-meta">{pick(ing, 'meta')}</p>}
              {(pick(ing, 'paras') || []).map((p) => (
                <p key={p} className="sps-para">{p}</p>
              ))}
              {(ing.blocks || []).map((b) => (
                <div key={b.label} className="sps-block">
                  <h4>{pick(b, 'label')}</h4>
                  {pick(b, 'text') && <p>{pick(b, 'text')}</p>}
                  {pick(b, 'list') && (
                    <ul>
                      {pick(b, 'list').map((li) => (
                        <li key={li}>{li}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
              {pick(ing, 'note') && <p className="sps-note">{pick(ing, 'note')}</p>}
              <Figure src={ing.image} alt={pick(ing, 'name')} />
            </article>
          ))}
        </div>
        {pick(s, 'note') && <p className="sps-note">{pick(s, 'note')}</p>}
        <StoryLink link={s.link} pick={pick} />
        <Figure src={s.image} alt={s.eyebrow} />
      </section>
    );
  }

  if (s.type === 'flow') {
    return (
      <section className="sps-band">
        {pick(s, 'eyebrow') && <span className="sps-eyebrow">{pick(s, 'eyebrow')}</span>}
        {pick(s, 'title') && <h2 className="sps-title">{pick(s, 'title')}</h2>}
        {(pick(s, 'paras') || []).map((p) => (
          <p key={p} className="sps-para">{p}</p>
        ))}
        <FlowSteps steps={s.steps} pick={pick} />
        {pick(s, 'note') && <p className="sps-note">{pick(s, 'note')}</p>}
        {pick(s, 'fineprint') && <p className="sps-fineprint">{pick(s, 'fineprint')}</p>}
        <StoryLink link={s.link} pick={pick} />
        <Figure src={s.image} alt={s.eyebrow} />
      </section>
    );
  }

  if (s.type === 'stack') {
    return (
      <section className="sps-band">
        {pick(s, 'eyebrow') && <span className="sps-eyebrow">{pick(s, 'eyebrow')}</span>}
        {pick(s, 'title') && <h2 className="sps-title">{pick(s, 'title')}</h2>}
        <div className="sps-stack">
          {s.items.map((item, i) => (
            <div key={item.name} className="sps-stack-item">
              <div className="sps-stack-card">
                <strong>{item.name}</strong>
                {pick(item, 'desc') && <span>{pick(item, 'desc')}</span>}
              </div>
              {i < s.items.length - 1 && (
                <span className="sps-stack-plus" aria-hidden="true">＋</span>
              )}
            </div>
          ))}
          <span className="sps-arch-arrow" aria-hidden="true">↓</span>
          <p className="sps-stack-result">{s.result}</p>
        </div>
        {pick(s, 'note') && <p className="sps-note">{pick(s, 'note')}</p>}
      </section>
    );
  }

  if (s.type === 'text') {
    return (
      <section className="sps-section">
        {pick(s, 'eyebrow') && <span className="sps-eyebrow">{pick(s, 'eyebrow')}</span>}
        {pick(s, 'title') && <h2 className="sps-title">{pick(s, 'title')}</h2>}
        {(pick(s, 'paras') || []).map((p) => (
          <p key={p} className="sps-para">{p}</p>
        ))}
        {pick(s, 'checkItems') && (
          <ul className="sps-check-list">
            {pick(s, 'checkItems').map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}
        <StoryLink link={s.link} pick={pick} />
        <Figure src={s.image} alt={s.eyebrow} />
      </section>
    );
  }

  if (s.type === 'spec') {
    return (
      <section className="sps-spec">
        <h3>{s.title}</h3>
        <dl>
          {s.rows.map((row) => (
            <div key={row.label} className="sps-spec-row">
              <dt>{pick(row, 'label')}</dt>
              <dd>{pick(row, 'value')}</dd>
            </div>
          ))}
        </dl>
        <Figure src={s.image} alt={s.title} />
      </section>
    );
  }

  return null;
}

export default function ShopProductStory({ story, isEn }) {
  const pick = (obj, key) => (isEn && obj[`${key}En`] ? obj[`${key}En`] : obj[key]);

  return (
    <div className="sps">
      {story.sections.map((s, i) => (
        <Section key={i} s={s} pick={pick} />
      ))}
    </div>
  );
}
