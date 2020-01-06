import { h } from 'preact';
import data from '../data';

const { profile, summary, experiences, educations, skills, miscellany } = data;

const Profile = ({ profile }: { profile: typeof data.profile }) => (
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
            alt="Profile"
          />
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
            title="Email"
          >
            {profile.email}
          </a>
        </div>
        <div>
          <a
            class="has-text-white level-right"
            href={profile.social.linkedin.link}
            target="_blank"
            rel="noopener"
            title="Linkedin"
          >
            {profile.social.linkedin.name} [LinkedIn]
          </a>
        </div>
        <div>
          <a
            class="has-text-white level-right"
            href={profile.social.github.link}
            target="_blank"
            rel="noopener"
            title="GitHub"
          >
            {profile.social.github.name} [GitHub]
          </a>
        </div>
      </div>
    </div>
  </div>
);

const Summary = ({ summary }: { summary: typeof data.summary }) => (
  <div class="summary">
    <div class="title is-size-5 has-text-primary has-text-weight-bold">
      SUMMARY
    </div>
    <p>{summary}</p>
  </div>
);

const Experience = ({
  experiences,
}: {
  experiences: typeof data.experiences;
}) => (
  <div class="experience">
    <div class="title is-size-5 has-text-primary has-text-weight-bold">
      EXPERIENCE
    </div>
    {experiences.map(experience => (
      <div key={`${experience.company}-${experience.period}`} class="item">
        <div class="is-size-5">
          <b>{experience.company}, </b>
          <span class="has-text-weight-semi-bold">
            <i>{experience.title}</i>
          </span>
        </div>
        <div class="is-size-7">
          {experience.period} — {experience.location}
        </div>
        <div class="content">
          <ul>
            {experience.descriptions.map(description => (
              <li key={description}>{description}</li>
            ))}
          </ul>
        </div>
      </div>
    ))}
  </div>
);

const Education = ({ educations }: { educations: typeof data.educations }) => (
  <div class="education">
    <div class="title is-size-5 has-text-primary has-text-weight-bold">
      EDUCATION
    </div>
    {educations.map(education => (
      <div key={`${education.name}-${education.period}`} class="item">
        <div class="is-size-5">
          <b>{education.name}</b>
        </div>
        <div class="is-size-7">
          {education.period} — {education.city}
        </div>
        {education.descriptions.map(description => (
          <p key={description}>{description}</p>
        ))}
      </div>
    ))}
  </div>
);

const Skills = ({ skills }: { skills: typeof data.skills }) => (
  <div class="skills">
    <div class="title is-size-5 has-text-primary has-text-weight-bold">
      SKILLS
    </div>
    <div class="tags">
      {skills.map(skill => (
        <span key={skill} class="tag is-light is-info is-rounded is-size-6">
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const Miscellany = ({ miscellany }: { miscellany: typeof data.miscellany }) => (
  <div class="miscellany">
    <div class="title is-size-5 has-text-primary has-text-weight-bold">
      MISCELLANY
    </div>
    <div class="content">
      <ul>
        {miscellany.map(miscellaneous => (
          <li key={miscellaneous}>{miscellaneous}</li>
        ))}
      </ul>
    </div>
  </div>
);

const Home = () => (
  <main class="font-main hyphens-manual optimize-legibility">
    <header class="section has-background-primary">
      <Profile profile={profile} />
    </header>
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-three-fifths">
            <Summary summary={summary} />
            <Experience experiences={experiences} />
          </div>
          <div class="column is-two-fifths">
            <Education educations={educations} />
            <Skills skills={skills} />
            <Miscellany miscellany={miscellany} />
          </div>
        </div>
      </div>
    </section>
  </main>
);

export default Home;
