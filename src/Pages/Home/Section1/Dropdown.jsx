const Dropdown = ({ title, links }) => {
  return (
    <details onClick={(e) => e.stopPropagation()}>
      <summary className="flex items-center font-bold">
        {title}
        <button className="ml-3">
          <svg
            className="fill-current opacity-75 w-4 h-4 -mr-1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
          </svg>
        </button>
      </summary>

      {links.map((e, i) => (
        <p key={i}>
          <a href={e.href}>{e.name}</a>
        </p>
      ))}
    </details>
  );
};

export default Dropdown;
