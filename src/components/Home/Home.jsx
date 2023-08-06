import React, { useState } from "react";
import { useSelector } from "react-redux";
import styles from "./Home.module.css";
import { getFilter } from "../../Redux/selectors";
import { SortBar } from "../SortBar/SortBar";
import { EventCard } from "../EventCard/EventCard";
import { Pagination } from "../Pagination/Pagination";

export const Home = () => {
  const events = useSelector((state) => state.events.events);
  const filter = useSelector(getFilter);

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const filteredEvents = events.filter((event) => {
    const titleMatchesFilter = event.title
      .toLowerCase()
      .includes(filter.toLowerCase());
    const categoryMatchesFilter =
      selectedCategory === "all" || event.category === selectedCategory;
    return titleMatchesFilter && categoryMatchesFilter;
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredEvents.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.sortAndTitle}>
          <SortBar
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
          <h2 className={styles.title}>My events</h2>
        </div>

        <ul className={styles.list}>
          {currentItems.map(
            ({
              id,
              title,
              description,
              date,
              time,
              location,
              category,
              priority,
              image,
            }) => (
              <EventCard
                key={id}
                id={id}
                title={title}
                description={description}
                date={date}
                time={time}
                location={location}
                category={category}
                priority={priority}
                image={image}
              />
            )
          )}
        </ul>

        <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={filteredEvents.length}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};
