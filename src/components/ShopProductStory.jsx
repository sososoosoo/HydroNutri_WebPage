import { Link } from 'react-router-dom';

export default function ShopProductStory({ story, isEn }) {
  const pick = (obj, key) => (isEn && obj[`${key}En`] ? obj[`${key}En`] : obj[key]);

  return (
    <div className="sps">
      <section className="sps-hero">
        <span className="sps-eyebrow">{story.heroEyebrow}</span>
        <span className="sps-volume">{story.heroVolume}</span>
        <h2 className="sps-title">{pick(story, 'heroTitle')}</h2>
        {pick(story, 'heroParas').map((p) => (
          <p key={p} className="sps-para">{p}</p>
        ))}
      </section>

      {story.philosophy && (
        <section className="sps-band">
          <span className="sps-eyebrow">{story.philosophy.eyebrow}</span>
          <h2 className="sps-title">{pick(story.philosophy, 'title')}</h2>
          {pick(story.philosophy, 'paras').map((p) => (
            <p key={p} className="sps-para">{p}</p>
          ))}
        </section>
      )}

      {story.ingredients && (
        <section className="sps-ingredients">
          {story.ingredients.map((ing) => (
            <article key={ing.step} className="sps-ingredient">
              <span className="sps-step">{ing.step}</span>
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
            </article>
          ))}
        </section>
      )}

      {story.architecture && (
        <section className="sps-band">
          <span className="sps-eyebrow">{story.architecture.eyebrow}</span>
          <h2 className="sps-title">{pick(story.architecture, 'title')}</h2>
          <div className="sps-arch">
            {story.architecture.steps.map((s, i) => (
              <div key={s.name} className="sps-arch-item">
                <div className="sps-arch-card">
                  {s.step && <em className="sps-arch-step">{s.step}</em>}
                  <strong>{s.name}</strong>
                  {s.volume && <span className="sps-arch-volume">{s.volume}</span>}
                  <span>{pick(s, 'desc')}</span>
                </div>
                {i < story.architecture.steps.length - 1 && (
                  <span className="sps-arch-arrow" aria-hidden="true">↓</span>
                )}
              </div>
            ))}
          </div>
          <p className="sps-note">{pick(story.architecture, 'note')}</p>
        </section>
      )}

      {story.duo && (
        <section className="sps-band">
          <span className="sps-eyebrow">{story.duo.eyebrow}</span>
          <h2 className="sps-title">{pick(story.duo, 'title')}</h2>
          <div className="sps-arch">
            {story.duo.steps.map((s, i) => (
              <div key={s.name} className="sps-arch-item">
                <div className="sps-arch-card">
                  {s.step && <em className="sps-arch-step">{s.step}</em>}
                  <strong>{s.name}</strong>
                  {s.volume && <span className="sps-arch-volume">{s.volume}</span>}
                  <span>{pick(s, 'desc')}</span>
                </div>
                {i < story.duo.steps.length - 1 && (
                  <span className="sps-arch-arrow" aria-hidden="true">↓</span>
                )}
              </div>
            ))}
          </div>
          <p className="sps-note">{pick(story.duo, 'note')}</p>
        </section>
      )}

      {story.texture && (
        <section className="sps-section">
          <span className="sps-eyebrow">{story.texture.eyebrow}</span>
          {pick(story.texture, 'paras').map((p) => (
            <p key={p} className="sps-para">{p}</p>
          ))}
        </section>
      )}

      {story.recommended && (
        <section className="sps-section">
          <span className="sps-eyebrow">{story.recommended.eyebrow}</span>
          <ul className="sps-check-list">
            {pick(story.recommended, 'items').map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      )}

      {story.spec && (
        <section className="sps-spec">
          <h3>{story.spec.title}</h3>
          <dl>
            {story.spec.rows.map((row) => (
              <div key={row.label} className="sps-spec-row">
                <dt>{pick(row, 'label')}</dt>
                <dd>{pick(row, 'value')}</dd>
              </div>
            ))}
          </dl>
        </section>
      )}

      {story.routine && (
        <section className="sps-routine">
          <p className="sps-routine-flow">{story.routine.flow}</p>
          <p className="sps-para">{pick(story.routine, 'text')}</p>
          {story.routine.targetId && (
            <Link to={`/shopHome/product/${story.routine.targetId}`} className="shop-btn ghost">
              {isEn ? story.routine.targetLabelEn : story.routine.targetLabel}
            </Link>
          )}
        </section>
      )}
    </div>
  );
}
