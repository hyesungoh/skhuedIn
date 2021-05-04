import React, { useState } from "react";
import LibraryPresenter from "pages/library/presenter/LibraryPresenter";

import { useQuery } from "react-query";
import axios from "axios";

import Loading from "components/Loading/Loading";
import Error from "components/Error/Error";

const LibraryContainer = () => {
    const GET_BLOGS_URL: string = "http://localhost:8080/api/blogs";

    // const [blogs, setBlogs] = useState<>()
    // get axios list and recommend
    const { data, isLoading, error } = useQuery("blogs", () =>
        axios.get(GET_BLOGS_URL)
    );

    console.log(data, isLoading, error);

    if (isLoading) return <Loading />;
    if (error) return <Error />;
    return <LibraryPresenter />;
};

export default LibraryContainer;
