import React from "react";

interface Props {
  params: { slug: string[] };
  searchParams: { sortOrder: string };
}

const ProuctPage = ({
  params: { slug },
  searchParams: { sortOrder },
}: Props) => {
  return (
    <div>
      ProuctPage {slug} {sortOrder}
    </div>
  );
};

export default ProuctPage;
