import { useState } from "react";

export default async function PostData(url: string, body: Object) {
    try {
        const result = await fetch((url), {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'include'
        });

        const data = await result.json();
        return data;
    } catch (error) {
        throw error;
    }
};