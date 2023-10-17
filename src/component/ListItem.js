export const ListItem = ({
  data,
  isActiveFlightNumber,
  isActiveDetails,
  isActiveLinks,
}) => {
  return (
    <div className="card">
      <p className="card-text card-date">{data.date_local.substring(0, 10)}</p>

      <h3 className="card-header">{data.name}</h3>
      {isActiveFlightNumber && (
        <p className="card-text">Flight number: {data.flight_number}</p>
      )}

      {isActiveDetails && <p className="card-text">{data.details}</p>}
      {data.upcoming === false ? (
        <p className="card-text">
          Upcoming: <span className="false">False</span>
        </p>
      ) : (
        <p className="card-text">
          Upcoming: <span className="true">True</span>
        </p>
      )}
      {isActiveLinks && (
        <>
          {data.links.article && (
            <a
              className="card-link"
              href={data.links.article}
              target="_blank"
              rel="noreferrer"
            >
              Article
            </a>
          )}
          {data.links.webcast && (
            <a
              className="card-link"
              href={data.links.webcast}
              target="_blank"
              rel="noreferrer"
            >
              YouTube
            </a>
          )}
        </>
      )}
    </div>
  );
};
