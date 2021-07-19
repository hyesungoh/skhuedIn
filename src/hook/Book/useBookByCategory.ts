import axios from "axios";
import { useQuery } from "react-query";

import { baseUrl } from "api/url";
import { IFetchBlog } from "types/fetch";
interface IUseBookByCategory {
    category: string;
}

const useBookByCategory = ({ category }: IUseBookByCategory) => {
    // request를 보낼 url을 변수화하여,
    // 인기도순일 때의 url을 핸들링 합니다
    // 그 외에는 'user.lastModifiedDate,ASC' 와 같은 형식으로 작성합니다
    let requestUrl: string = `${baseUrl}/api/blogs?page=0&size=8`;
    requestUrl += category === "popular" ? "&cmd=view" : `&sort=${category}`;

    // ["blogs", "popular"] 와 같은 이름으로 캐싱합니다
    const { data, isLoading, error } = useQuery(["blogs", category], () =>
        axios.get<IFetchBlog>(requestUrl)
    );

    return { data: data?.data.data, isLoading, error };
};

export default useBookByCategory;
