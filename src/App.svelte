<script>
  import data from './data.json';

  const {
    profile,
    summary,
    experiences,
    educations,
    skills,
    miscellany,
  } = data;
</script>

<style>
  .profile .image {
    margin: auto;
  }

  .summary,
  .experience,
  .education,
  .skills,
  .miscellany {
    padding-bottom: 2rem;
  }

  .experience .item:not(:last-child),
  .education .item:not(:last-child) {
    padding-bottom: 1rem;
  }
</style>

<main class="font-main hyphens-manual optimize-legibility">
  <header class="section has-background-primary">
    <div class="container">
      <div class="profile columns level has-text-centered-mobile">
        <div class="column is-two-fifths">
          <h1 class="title is-size-1 has-text-white">{profile.name}</h1>
          <p class="subtitle has-text-white">{profile.title}</p>
        </div>
        <div class="column is-one-fifth">
          <figure class="image is-128x128">
            <img
              class="box is-rounded is-paddingless"
              src={profile.photo}
              alt="Profile" />
          </figure>
        </div>
        <div class="column is-two-fifths">
          <p class="has-text-weight-light has-text-white level-right">
            {profile.city}
          </p>
          <p class="has-text-weight-light has-text-white level-right">
            {profile.phone}
          </p>
          <div>
            <a
              class="has-text-white level-right"
              href={`mailto:${profile.email}`}
              target="_blank"
              rel="noopener"
              title="Email">
              {profile.email}
            </a>
          </div>
          <div>
            <a
              class="has-text-white level-right"
              href={profile.social.linkedin.link}
              target="_blank"
              rel="noopener"
              title="Linkedin">
              {profile.social.linkedin.name} [LinkedIn]
            </a>
          </div>
          <div>
            <a
              class="has-text-white level-right"
              href={profile.social.github.link}
              target="_blank"
              rel="noopener"
              title="GitHub">
              {profile.social.github.name} [GitHub]
            </a>
          </div>
        </div>
      </div>
    </div>
  </header>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-three-fifths">
          <div class="summary">
            <div class="title is-size-5 has-text-primary has-text-weight-bold">
              SUMMARY
            </div>
            <p>{summary}</p>
          </div>
          <div class="experience">
            <div class="title is-size-5 has-text-primary has-text-weight-bold">
              EXPERIENCE
            </div>
            {#each experiences as experience}
              <div class="item">
                <div class="is-size-5">
                  <b>{experience.company},</b>
                  <span class="has-text-weight-semi-bold">
                    <i>{experience.title}</i>
                  </span>
                </div>
                <div class="is-size-7">
                  {experience.period} — {experience.location}
                </div>
                <div class="content">
                  <ul>
                    {#each experience.descriptions as description}
                      <li>{description}</li>
                    {/each}
                  </ul>
                </div>
              </div>
            {/each}
          </div>
        </div>
        <div class="column is-two-fifths">
          <div class="education">
            <div class="title is-size-5 has-text-primary has-text-weight-bold">
              EDUCATION
            </div>
            {#each educations as education}
              <div class="item">
                <div class="is-size-5">
                  <b>{education.name}</b>
                </div>
                <div class="is-size-7">
                  {education.period} — {education.city}
                </div>
                {#each education.descriptions as description}
                  <p>{description}</p>
                {/each}
              </div>
            {/each}
          </div>
          <div class="skills">
            <div class="title is-size-5 has-text-primary has-text-weight-bold">
              SKILLS
            </div>
            <div class="tags">
              {#each skills as skill}
                <span class="tag is-light is-info is-rounded is-size-6">
                  {skill}
                </span>
              {/each}
            </div>
          </div>
          <div class="miscellany">
            <div class="title is-size-5 has-text-primary has-text-weight-bold">
              MISCELLANY
            </div>
            <div class="content">
              <ul>
                {#each miscellany as miscellaneous}
                  <li>{miscellaneous}</li>
                {/each}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</main>
