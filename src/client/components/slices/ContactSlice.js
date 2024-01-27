import api from "../../store/api";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const contactApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getContacts: builder.query({
        query: () => "/contact",
        providesTags: ["Contact"],
        }),
        addContact: builder.mutation({
        query: (newContact) => ({
            url: "/contact/add",
            method: "POST",
            body: newContact,
            
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