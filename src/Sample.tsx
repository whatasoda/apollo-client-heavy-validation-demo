import { styled } from "styled-components";
import { gql, useLazyQuery } from "@apollo/client";
import { Timer } from "./Timer";
import { Hover } from "./Hover";

const createQuery = (id: "01" | "02" | "03") => gql`
    query Sample${id} {
      article {
        id
        title
        paragraph {
          id
          text
        }
      }
    }
  `;

const Sample01 = createQuery("01");
const Sample02 = createQuery("02");
const Sample03 = createQuery("03");

const Button = styled.button`
  display: block;
  margin-top: 4px;
`;

export const Sample = () => {
  const [, { refetch: refetchSample01 }] = useLazyQuery(Sample01, {
    fetchPolicy: "cache-and-network",
  });
  const [, { refetch: refetchSample02 }] = useLazyQuery(Sample02, {
    fetchPolicy: "cache-and-network",
  });
  const [, { refetch: refetchSample03 }] = useLazyQuery(Sample03, {
    fetchPolicy: "cache-and-network",
  });
  const [, { refetch: refetchSample01NoCache }] = useLazyQuery(Sample01, {
    fetchPolicy: "no-cache",
  });
  const [, { refetch: refetchSample02NoCache }] = useLazyQuery(Sample02, {
    fetchPolicy: "no-cache",
  });
  const [, { refetch: refetchSample03NoCache }] = useLazyQuery(Sample03, {
    fetchPolicy: "no-cache",
  });

  return (
    <div>
      <Timer />
      <Hover />
      <Button onClick={() => refetchSample01()}>Fetch Sample 01</Button>
      <Button onClick={() => refetchSample02()}>Fetch Sample 02</Button>
      <Button onClick={() => refetchSample03()}>Fetch Sample 03</Button>
      <Button onClick={() => refetchSample01NoCache()}>
        Fetch Sample 01 No cache
      </Button>
      <Button onClick={() => refetchSample02NoCache()}>
        Fetch Sample 02 No cache
      </Button>
      <Button onClick={() => refetchSample03NoCache()}>
        Fetch Sample 03 No cache
      </Button>
    </div>
  );
};
