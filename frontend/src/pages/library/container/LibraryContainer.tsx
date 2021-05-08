import React, { useEffect, useState } from "react";
import LibraryPresenter from "pages/library/presenter/LibraryPresenter";

import { useQuery } from "react-query";
import axios from "axios";

import { getBlogs } from "api/blog/fetch";

const LibraryContainer = () => {
    // const [blogs, setBlogs] = useState<>()
    // get axios list and recommend

    const { data, status, error } = useQuery("blogs", getBlogs);
    return <LibraryPresenter data={data} status={status} error={error} />;
};

export default LibraryContainer;
