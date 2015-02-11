var searchIndex = {};
searchIndex['bytes'] = {"items":[[0,"","bytes",""],[3,"ByteBuf","","A `Buf` backed by a contiguous region of memory."],[3,"ROByteBuf","","Same as `ByteBuf` but cannot be flipped to a `MutByteBuf`."],[3,"MutByteBuf","",""],[3,"SeqByteStr","",""],[3,"SmallByteStr","",""],[3,"SmallByteStrBuf","",""],[3,"Bytes","",""],[3,"RingBuf","","Buf backed by a continous chunk of memory. Maintains a read cursor and a\nwrite cursor. When reads and writes reach the end of the allocated buffer,\nwraps around to the start."],[3,"RingBufReader","",""],[3,"RingBufWriter","",""],[3,"Rope","","An immutable sequence of bytes formed by concatenation of other `ByteStr`\nvalues, without copying the data in the pieces. The concatenation is\nrepresented as a tree whose leaf nodes are each a `Bytes` value."],[3,"SliceBuf","",""],[3,"MutSliceBuf","",""],[4,"BufError","",""],[13,"Underflow","","",0],[13,"Overflow","","",0],[11,"from_slice","","Create a new `ByteBuf` by copying the contents of the given slice.",1],[11,"mut_with_capacity","","",1],[11,"none","","",1],[11,"from_mem_ref","","",1],[11,"capacity","","",1],[11,"flip","","",1],[11,"read_slice","","",1],[11,"to_seq_byte_str","","",1],[11,"to_bytes","","",1],[11,"remaining","","",1],[11,"bytes","","",1],[11,"advance","","",1],[11,"read_slice","","",1],[11,"from_mem_ref","","",2],[11,"to_seq_byte_str","","",2],[11,"to_bytes","","",2],[11,"remaining","","",2],[11,"bytes","","",2],[11,"advance","","",2],[11,"read_slice","","",2],[11,"capacity","","",3],[11,"flip","","",3],[11,"clear","","",3],[11,"write_slice","","",3],[11,"remaining","","",3],[11,"advance","","",3],[11,"mut_bytes","","",3],[11,"from_slice","","Create a new `SeqByteStr` from a byte slice.",4],[11,"from_mem_ref","","Creates a new `SeqByteStr` from a `MemRef`, an offset, and a length.",4],[11,"buf","","",4],[11,"concat","","",4],[11,"len","","",4],[11,"slice","","",4],[11,"to_bytes","","",4],[11,"index","","",4],[11,"clone","","",4],[11,"clone","","",5],[11,"zero","","",5],[11,"from_slice","","",5],[11,"buf","","",5],[11,"concat","","",5],[11,"len","","",5],[11,"slice","","",5],[11,"split_at","","",5],[11,"to_bytes","","",5],[11,"index","","",5],[11,"clone","","",6],[11,"remaining","","",6],[11,"bytes","","",6],[11,"advance","","",6],[11,"from_slice","","",7],[11,"of","","",7],[11,"empty","","",7],[11,"downcast_ref","","If the underlying `ByteStr` is of type `B`, returns a reference to it\notherwise None.",7],[11,"try_unwrap","","If the underlying `ByteStr` is of type `B`, returns the unwraped value,\notherwise, returns the original `Bytes` as `Err`.",7],[11,"buf","","",7],[11,"concat","","",7],[11,"len","","",7],[11,"slice","","",7],[11,"split_at","","",7],[11,"to_bytes","","",7],[11,"index","","",7],[11,"clone","","",7],[11,"drop","","",7],[11,"new","","",8],[11,"is_full","","",8],[11,"is_empty","","",8],[11,"capacity","","",8],[11,"reader","","",8],[11,"writer","","",8],[11,"clone","","",8],[11,"fmt","","",8],[11,"drop","","",8],[11,"remaining","","",9],[11,"bytes","","",9],[11,"advance","","",9],[11,"remaining","","",10],[11,"advance","","",10],[11,"mut_bytes","","",10],[11,"from_slice","","",11],[11,"of","","Returns a Rope consisting of the supplied Bytes as a single segment.",11],[11,"len","","",11],[11,"is_empty","","",11],[11,"buf","","",11],[11,"concat","","",11],[11,"len","","",11],[11,"slice","","",11],[11,"to_bytes","","",11],[11,"index","","",11],[11,"clone","","",11],[11,"wrap","","",12],[11,"remaining","","",12],[11,"bytes","","",12],[11,"advance","","",12],[11,"wrap","","",13],[11,"remaining","","",13],[11,"advance","","",13],[11,"mut_bytes","","",13],[0,"traits","",""],[6,"BufResult","",""],[8,"Buf","","A trait for values that provide random and sequential access to bytes."],[10,"remaining","","Returns the number of bytes that can be accessed from the Buf",14],[10,"bytes","","Returns a slice starting at the current Buf position and of length\nbetween 0 and `Buf::remaining()`.",14],[10,"advance","","Advance the internal cursor of the Buf",14],[11,"has_remaining","","Returns true if there are any more bytes to consume",14],[11,"read_slice","","Read bytes from the `Buf` into the given slice and advance the cursor by\nthe number of bytes read.",14],[11,"read_byte","","Read a single byte from the `Buf`",14],[8,"BufExt","",""],[10,"read","","Read bytes from this Buf into the given sink and advance the cursor by\nthe number of bytes read.",15],[8,"MutBuf","",""],[10,"remaining","","Returns the number of bytes that can be accessed from the Buf",16],[10,"advance","","Advance the internal cursor of the Buf",16],[11,"has_remaining","","Returns true if there are any more bytes to consume",16],[10,"mut_bytes","","Returns a mutable slice starting at the current Buf position and of\nlength between 0 and `Buf::remaining()`.",16],[11,"write_slice","","Read bytes from this Buf into the given slice and advance the cursor by\nthe number of bytes read.",16],[11,"write_byte","","Write a single byte to the `MuBuf`",16],[8,"MutBufExt","",""],[10,"write","","Write bytes from the given source into the current `MutBuf` and advance\nthe cursor by the number of bytes written.",17],[8,"ByteStr","",""],[16,"Buf","bytes::ByteStr",""],[10,"buf","bytes","Returns a read-only `Buf` for accessing the byte contents of the\n`ByteStr`.",18],[10,"concat","","Returns a new `Bytes` value representing the concatenation of `self`\nwith the given `Bytes`.",18],[10,"len","","Returns the number of bytes in the ByteStr",18],[11,"is_empty","","Returns true if the length of the `ByteStr` is 0",18],[10,"slice","","Returns a new ByteStr value containing the byte range between `begin`\n(inclusive) and `end` (exclusive)",18],[11,"slice_from","","Returns a new ByteStr value containing the byte range starting from\n`begin` (inclusive) to the end of the byte str.",18],[11,"slice_to","","Returns a new ByteStr value containing the byte range from the start up\nto `end` (exclusive).",18],[11,"split_at","","Divides the value into two `Bytes` at the given index.",18],[10,"to_bytes","","Consumes the value and returns a `Bytes` instance containing\nidentical bytes",18],[8,"Sink","","An value that reads bytes from a Buf into itself"],[16,"Error","bytes::Sink",""],[10,"sink","bytes","",19],[8,"Source","",""],[16,"Error","bytes::Source",""],[10,"fill","bytes","",20],[6,"Error","",""],[6,"Error","",""],[6,"Error","",""],[6,"Error","",""],[6,"Error","",""],[6,"Error","",""],[6,"Error","",""],[11,"remaining","alloc::boxed","",21],[11,"bytes","","",21],[11,"advance","","",21],[11,"read_slice","","",21],[11,"fmt","bytes","",0]],"paths":[[4,"BufError"],[3,"ByteBuf"],[3,"ROByteBuf"],[3,"MutByteBuf"],[3,"SeqByteStr"],[3,"SmallByteStr"],[3,"SmallByteStrBuf"],[3,"Bytes"],[3,"RingBuf"],[3,"RingBufReader"],[3,"RingBufWriter"],[3,"Rope"],[3,"SliceBuf"],[3,"MutSliceBuf"],[8,"Buf"],[8,"BufExt"],[8,"MutBuf"],[8,"MutBufExt"],[8,"ByteStr"],[8,"Sink"],[8,"Source"],[3,"Box"]]};
initSearch(searchIndex);
