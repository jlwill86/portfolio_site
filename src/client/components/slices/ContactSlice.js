import api from "../../store/api";

const contactApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getContacts: builder.query({
        query: () => "/contact",
        providesTags: ["Contact"],
        }),
        addContact: builder.mutation({
        query: (contact) => ({
            url: "/contact",
            method: "POST",
            body: contact,
        }),
        invalidatesTags: ["Contact"],
        }),
        editContact: builder.mutation({
        query: ({ id, ...contact }) => ({
            url: `/contact/${id}`,
            method: "PUT",
            body: contact,
        }),
        invalidatesTags: ["Contact"],
        }),
        deleteContact: builder.mutation({
        query: (id) => ({
            url: `/contact/${id}`,
            method: "DELETE",
        }),
        invalidatesTags: ["Contact"],
        }),
    }),
    });

    export const { useGetContactsQuery, useAddContactMutation, useEditContactMutation, useDeleteContactMutation } = contactApi;