import { api } from "../axios/axios";


// ----------------------------Post methods-------------------------------------//

const PostRentalEnquiryApi = (values) => {
    return api.post('rental-enquiry/', values, {
        withCredentials: true,
    });
};

const PostEnquiryApi = (values) => {
    return api.post('enquiry/', values, {
        withCredentials: true,
    });
};




// ----------------------------Get methods-------------------------------------//
const GetBranchesApi = () => {
    return api.get('branch/', {
        withCredentials: true,
    });
};

const GetHomePageApi = () => {
    return api.get('home-page/', {
        withCredentials: true,
    });
};

const GetProjectApi = () => {
    return api.get('projects/', {
        withCredentials: true,
    });
};

const GetProjectDetailsApi = (slug) => {
    return api.get(`projects/${slug}/`, {
        withCredentials: true,
    });
};

const GetBranchDropDownApi = () => {
    return api.get('branch-dropdown/', {
        withCredentials: true,
    });
};

const GetRentalsApi = () => {
    return api.get('rentals/', {
        withCredentials: true,
    });
};

const GetTestmonialsApi = (startLimit,endLimit) => {
    return api.get(`testimonials/?start_limit=${startLimit}&end_limit=${endLimit}`, {
        withCredentials: true,
    });
};

const GetBlogsApi = (startLimit,endLimit) => {
    return api.get(`blogs/?start_limit=${startLimit}&end_limit=${endLimit}`, {
        withCredentials: true,
    });
};

const GetBlogDetailsApi = (slug) => {
    return api.get(`blogs/${slug}/`, {
        withCredentials: true,
    });
};

const GetNewsAndEventsApi = (startLimit,endLimit) => {
    return api.get(`news-and-events/?start_limit=${startLimit}&end_limit=${endLimit}`, {
        withCredentials: true,
    });
};

const GetNewsAndEventsDetailsApi = (slug) => {
    return api.get(`news-and-events/${slug}/`, {
        withCredentials: true,
    });
};

const GetKeyAndHandoverApi = (startLimit,endLimit) => {
    return api.get(`key-hand-over/?start_limit=${startLimit}&end_limit=${endLimit}`, {
        withCredentials: true,
    });
};

const GetSeoApi = (path) => {
    return api.get(`seo/?path=${path}`, {
        withCredentials: true,
    });
};


export{
    GetBranchesApi,
    GetHomePageApi,
    GetProjectApi,
    GetBranchDropDownApi,
    GetProjectDetailsApi,
    GetRentalsApi,
    PostRentalEnquiryApi,
    PostEnquiryApi,
    GetTestmonialsApi,
    GetBlogsApi,
    GetBlogDetailsApi,
    GetNewsAndEventsApi,
    GetNewsAndEventsDetailsApi,
    GetKeyAndHandoverApi,
    GetSeoApi,
}