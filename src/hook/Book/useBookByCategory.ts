import { baseUrl } from "api/url";
import axios from "axios";
import { useQuery } from "react-query";
import { IFetchBase, IFetchBlog } from "types/fetch";

interface IUseBookByCategory {
    category: string;
}

const useBookByCategory = ({ category }: IUseBookByCategory) => {
    let requestUrl: string = `${baseUrl}/api/blogs?page=0&size=10`;
    requestUrl += category === "popular" ? "&cmd=view" : `&sort=${category}`;

    const { data, isLoading, error } = useQuery(["blogs", category], () =>
        axios.get<IFetchBlog>(requestUrl)
    );

    return { data, isLoading, error };
};

export default useBookByCategory;
