import React from 'react';
import Box, { BoxProps } from '@mui/material/Box';
import Stack from '@mui/material/Stack';

const MovieList = (props) => {
    return (
        <>
        <Stack direction="row" spacing={2}>
            {
                props.movies.map((movie, index) => (
                    <div>
                        <img src={movie.Poster} alt='movie'></img>
                    </div>

                ))
            }
            </Stack>
        </>
    )

};

export default MovieList;