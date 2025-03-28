import type { SingleRecommend } from ".";

type RecommendsProps = {
  recommends: SingleRecommend[];
};

export const Recommends = ({ recommends }: RecommendsProps) =>
  recommends.length > 0 && (
    <>
      <h2>もしかして :</h2>
      <ul>
        {recommends.map((recommend) => (
          <li key={recommend.link}>
            <article>
              <a href={recommend.link}>{recommend.title}</a>
            </article>
          </li>
        ))}
      </ul>
    </>
  );
